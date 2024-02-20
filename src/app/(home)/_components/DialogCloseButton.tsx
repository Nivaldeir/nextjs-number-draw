import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
interface AlertDialogProps {
  actived: boolean;
  setIsOpenModal: Function;
  setNumberGenerate: Function;
  numberRandom: any[];
}
export function AlertDialogDemo({
  actived,
  setIsOpenModal,
  numberRandom,
  setNumberGenerate,
}: AlertDialogProps) {
  const handleClose = () => {
    setIsOpenModal(false);
    setNumberGenerate([]);
  };
  console.log(numberRandom);
  return (
    <AlertDialog open={actived}>
      {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Numeros Sorteados</AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col w-full items-center gap-3">
            {numberRandom.map((e) => {
              let numberToString = e.toString().split("");
              return (
                <div className="flex items-center gap-3">
                  {numberToString.map((e: string) => (
                    <div className="flex w-10 h-10 text-black font-bold bg-white items-center justify-center rounded-full">
                      {e}
                    </div>
                  ))}
                </div>
              );
            })}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => handleClose()}>
            Fechar
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
