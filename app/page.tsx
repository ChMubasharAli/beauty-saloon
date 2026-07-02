import Image from "next/image";
import { creatUser } from "../lib/action";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <form action={creatUser} className="space-x-4">
        <input
          className="border p-2"
          type="email"
          name="email"
          placeholder="Enter email"
        />
        <input
          className="border p-2"
          type="text"
          name="name"
          placeholder="Enter name"
        />
        <button className="border p-2" type="submit">
          create user
        </button>
      </form>
    </div>
  );
}
