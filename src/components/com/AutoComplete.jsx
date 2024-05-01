import React, { useState, useRef, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Command, CommandGroup, CommandItem, CommandList, CommandInput } from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";

export const AutoComplete = ({
  options,
  placeholder,
  emptyMessage,
  value,
  onValueChange,
  disabled,
  isLoading = false,
}) => {
  const inputRef = useRef(null);

  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const [inputValue, setInputValue] = useState(value?.label || "");

  const handleKeyDown = useCallback(
    (event) => {
      const input = inputRef.current;
      if (!input) {
        return;
      }

      // Keep the options displayed when the user is typing
      if (!isOpen) {
        setOpen(true);
      }

      // This is not a default behavior of the <input /> field
      if (event.key === "Enter" && input.value !== "") {
        const optionToSelect = options.find((option) => option.label === input.value);
        if (optionToSelect) {
          setSelected(optionToSelect);
          onValueChange?.(optionToSelect);
        }
      }

      if (event.key === "Escape") {
        input.blur();
      }
    },
    [isOpen, options, onValueChange]
  );

  const handleBlur = useCallback(() => {
    setOpen(false);
    setInputValue(selected?.label);
  }, [selected]);

  const handleSelectOption = useCallback(
    (selectedOption) => {
      setInputValue(selectedOption.label);

      setSelected(selectedOption);
      onValueChange?.(selectedOption);

      // This is a hack to prevent the input from being focused after the user selects an option
      // We can call this hack: "The next tick"
      setTimeout(() => {
        inputRef?.current?.blur();
      }, 0);
    },
    [onValueChange]
  );

  return (
    <CommandPrimitive onKeyDown={handleKeyDown}>
      <div>
        <CommandInput
          ref={inputRef}
          value={inputValue}
          onValueChange={isLoading ? undefined : setInputValue}
          onBlur={handleBlur}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
          className="text-base text-dark" // Add a class to style text darker
        />
      </div>
      <div className="relative mt-1">
        {isOpen ? (
          <div className="animate-in fade-in-0 zoom-in-95 absolute top-0 z-10 w-full rounded-xl bg-stone-50  outline-none">
            <CommandList className="rounded-lg ring-1 ring-slate-200">
              {isLoading ? (
                <CommandPrimitive.Loading>
                  <div className="p-1">
                    <Skeleton className="h-8 w-full" />
                  </div>
                </CommandPrimitive.Loading>
              ) : null}

             {options.length > 0 && !isLoading ? (
  <CommandGroup>
    {options.map((option, index) => {
      const isSelected = selected?.value === option.value;
      return (
        <CommandItem
          key={index} // Using index as key
          value={option.label}
          onMouseDown={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
          onSelect={() => handleSelectOption(option)}
          className={cn("flex w-full items-center gap-2 ", !isSelected ? "pl-8" : null)}
        >
          {isSelected ? <Check className="w-4" /> : null}
          {option.label}
        </CommandItem>
      );
    })}
  </CommandGroup>
) : null}

              {!isLoading ? (
                <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-center text-sm">
                  {emptyMessage}
                </CommandPrimitive.Empty>
              ) : null}
            </CommandList>
          </div>
        ) : null}
      </div>
    </CommandPrimitive>
  );
};
