import { Store } from "@/types/store";
import { create } from "zustand";
import { createUserSlice } from "./user-slice";
import { createCartSlice } from "./cart-slice";
import { immer } from "zustand/middleware/immer";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

export const useStore = create<Store>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer((...a) => ({
          ...createUserSlice(...a),
          ...createCartSlice(...a),
        }))
      ),
      {
        name: "localStorage",
      }
    )
  )
);
