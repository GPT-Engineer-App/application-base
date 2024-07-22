import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Bare-Bones Web Application</h1>
      <p className="text-xl mb-8">Welcome to your bare-bones web application!</p>
      <Button onClick={() => console.log("Button clicked!")}>
        Click me!
      </Button>
    </div>
  );
};

export default Index;