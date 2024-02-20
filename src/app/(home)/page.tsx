"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import VideoPlayer from "./_components/VideoPlayer";
import { AlertDialogDemo } from "./_components/DialogCloseButton";
import { Button } from "@/components/ui/button";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Home() {
  const [quantityNumber, setQuantityNumber] = useState(1);
  const [minNumber, setFromNumber] = useState(1);
  const [maxNumber, setAndNumber] = useState(100);
  const [isOpenModel, setIsOpenModal] = useState(false);
  const [isVideoEnd, setIsVideoEnd] = useState(false);
  const [numberGenerate, setNumberGenerate] = useState<any[]>([]);
  const handleVideoEnd = () => {
    handleGenerate();
    setIsVideoEnd(false);
    setIsOpenModal(true);
  };

  const handleGenerate = () => {
    const updateNumbers = [...numberGenerate];
    for (let index = 0; index <= quantityNumber - 1; index++) {
      let numberRandom = getRandomInt(minNumber, maxNumber);
      let isLentgh = false;
      do {
        if (maxNumber.toString().length != numberRandom.toString().length) {
          numberRandom = ("0" + numberRandom) as any;
        } else {
          isLentgh = true;
        }
      } while (isLentgh);
      updateNumbers.push(numberRandom);
    }
    setNumberGenerate(updateNumbers);
  };
  return (
    <main>
      <div className="flex items-center justify-center flex-col gap-4">
        <Image
          alt="logo sorteador"
          src={"/logo-sorteador.svg"}
          height={150}
          width={450}
        />
        <div className="w-[60%] bg-slate-100 p-4 rounded-lg flex flex-col items-center gap-10">
          <div className="flex items-center justify-between gap-6">
            <h1 className="text-5xl text-black font-bold max-md:text-sm">Sortear</h1>
            <Input
              min={1}
              type="number"
              className="text-center w-10"
              value={quantityNumber}
              onChange={(e) => setQuantityNumber(parseInt(e.target.value))}
            />
            <h1 className="text-5xl text-black font-bold  max-md:text-sm">numeros</h1>
          </div>
          <div className="flex items-center gap-6 w">
            <h1 className="text-3xl text-black font-bold  max-md:text-sm">Entre</h1>
            <Input
              min={1}
              type="number"
              className="w-10 text-center"
              value={minNumber}
              onChange={(e) => setFromNumber(parseInt(e.target.value))}
            />
            <h1 className="text-3xl text-black font-bold  max-md:text-sm">e</h1>
            <Input
              min={1}
              type="number"
              className="w-16 text-center"
              value={maxNumber}
              onChange={(e) => setAndNumber(parseInt(e.target.value))}
            />
          </div>
          <Button
            variant={"ghost"}
            className="w-full bg-orange-500 text-white font-bold text-xl"
            onClick={() => setIsVideoEnd(true)}
          >
            Sortear
          </Button>
          {isOpenModel && (
            <AlertDialogDemo
              numberRandom={numberGenerate}
              setNumberGenerate={setNumberGenerate}
              actived={isOpenModel}
              setIsOpenModal={setIsOpenModal}
            />
          )}
          {isVideoEnd && <VideoPlayer videoEnd={handleVideoEnd} />}
        </div>
      </div>
    </main>
  );
}
