import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Bem vinda, Mozin!" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Esse é <b>"Palavrinha"</b> o jogo que eu fiz para o meu amor. Jogo para que você joque todos os dias e lembre o quão importante é para mim.
        </p>
        
        <p className="text-sm text-gray-500 dark:text-gray-300">
        O jogo é igualzinho o term.ooo com a diferença que todos os dias (até onde eu consegui, desculpa) você terá que adivinhar Palavrinhas que me lembram você. 
        </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Mas cuidado! Foram paravras que eu tirei da minha cabeça e por isso, pode ser que elas não respeitem a gramática normativa da lingua portuguesa.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="E"
          status="correct"
        />
        <Cell value="U" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      O "E" está certo
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="present"
        />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      O "T" está no lugar errado.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="M" />
        <Cell isRevealing={true} isCompleted={true} value="O" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      Não tem "O" na palavrinha.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Espero que goste S2
      </p>
    </BaseModal>
  )
}
