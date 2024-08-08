import React from 'react';
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the purr, meow, and hiss.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats can jump up to six times their length.",
];

const Index = () => {
  const [currentFact, setCurrentFact] = useState(catFacts[0]);

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    setCurrentFact(catFacts[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">All About Cats</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Cat Breeds</CardTitle>
              <CardDescription>Some popular cat breeds</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Siamese</li>
                <li>Persian</li>
                <li>Maine Coon</li>
                <li>Bengal</li>
                <li>Scottish Fold</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Cat Care Tips</CardTitle>
              <CardDescription>How to keep your cat healthy and happy</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Provide a balanced diet</li>
                <li>Regular vet check-ups</li>
                <li>Keep the litter box clean</li>
                <li>Offer plenty of playtime</li>
                <li>Groom your cat regularly</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
            alt="Cute cat" 
            className="mx-auto object-cover rounded-lg shadow-lg w-full max-w-2xl h-[400px]"
          />
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Fun Cat Fact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">{currentFact}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={getRandomFact}>Get Another Fact</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Index;
