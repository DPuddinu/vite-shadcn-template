import { ThemeProvider } from './components/providers/theme-provider';
import { Button } from './components/ui/button';
import { ModeToggle } from './components/ui/theme-toggle';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col gap-10 items-center justify-center min-h-screen text-center">
        <h1 className="text-5xl">Welcome to Shadcn + Vite</h1>

        <div className="flex gap-2">
          <ModeToggle/>
          <Button variant={'default'}>Default</Button>
          <Button variant={'secondary'}>Secondary</Button>
          <Button variant={'destructive'}>Destructive</Button>
          <Button variant={'outline'}>Outline</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
