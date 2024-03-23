import { ToggleGroupDemo } from "./toggle-group-demo";
import { SonnerDemo } from "./sonner-demo";
import { ThemePicker } from "./theme-picker";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">shadcn/ui demo</h1>
        <p>For primerachamba.tech</p>
      </div>
      <ThemePicker />
      <ToggleGroupDemo />
      <SonnerDemo />
    </div>
  );
}
