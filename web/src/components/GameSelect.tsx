import * as Select from "@radix-ui/react-select";
import { CaretDown, Check } from "phosphor-react";
import { useEffect, useState } from "react";
import { Game } from "../App";
import { FormTypes } from "./CreateAdModal";

interface Props {
  games: Game[];
  formValues: FormTypes;
}

export function GameSelect({ games, formValues }: Props) {
  return (
    <Select.Root>
      <Select.Trigger
        id="game"
        name="game"
        aria-label="Game"
        className={`bg-zinc-900 py-3 px-4 rounded text-small flex justify-between ${
          formValues.gameId ? "text-white" : "text-zinc-500"
        }`}
      >
        <Select.Value placeholder="Selecione um Game" />
        <Select.Icon>
          <CaretDown size={20} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="bg-zinc-900 rounded overflow-hidden">
          <Select.ScrollUpButton />
          <Select.Viewport className="py-2 px-1">
            <Select.Group>
              {games.map((item) => {
                return (
                  <Select.Item
                    key={item.id}
                    value={item.title}
                    className="flex items-center justify-between py-2 px-3 m-1 bg-zinc-900 text-zinc-500 cursor-pointer rounded hover:bg-zinc-800 hover:text-white"
                  >
                    <Select.ItemText>{item.title}</Select.ItemText>
                    <Select.ItemIndicator>
                      <Check size={16} className="text-emerald-500" />
                    </Select.ItemIndicator>
                  </Select.Item>
                );
              })}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
