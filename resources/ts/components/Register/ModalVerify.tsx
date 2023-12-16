import React, { Dispatch, SetStateAction, useRef } from 'react'

function ModalVerify({ show, changeShow } : {show: boolean, changeShow: Dispatch<SetStateAction<boolean>>}) {

    const $dialog = useRef<HTMLDialogElement>(null);

    // * Con el props que le mando desde el padre, decidimos si se veo o no. 
    if (show && $dialog.current) {
        $dialog.current?.showModal()
    } else {
        $dialog.current?.close()
    }
    const changeStateShowKey = (event: React.KeyboardEvent) => {
        console.log(event.key);
        if (event.key === "Escape") {
           changeShow(false) 
        }
    }

    const closeDialog = () => {
        if ($dialog.current) {
            changeShow(false)
        }

    }

  return (
    <dialog ref={$dialog} className='bg-red-700 w-[88vw] h-[50vh] text-black dialog' onKeyDown={changeStateShowKey}>
    </dialog>
  )
}

export default ModalVerify