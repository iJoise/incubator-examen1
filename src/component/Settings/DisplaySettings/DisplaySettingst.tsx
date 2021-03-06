import React, {ChangeEvent, useCallback} from "react";
import s from "./DisplaySettings.module.scss";

type DisplaySettingsPropsType = {
   maxValue: number
   startValue: number
   onChangeMaxValue: (value: number) => void
   onChangeStartValue: (value: number) => void
   onActiveEditMode: () => void
   errorMaxValue: boolean
   errorStartValue: boolean
}


export const DisplaySettings: React.FC<DisplaySettingsPropsType> = React.memo((props) => {

   const {
      startValue,
      maxValue,
      onChangeMaxValue,
      onChangeStartValue,
      onActiveEditMode,
      errorMaxValue,
      errorStartValue
   } = props

   const onChangeMaxValueHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.valueAsNumber
      onChangeMaxValue(value)
   }, [onChangeMaxValue]);

   const onChangeStartValueHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.valueAsNumber
      onChangeStartValue(value)
   }, [onChangeStartValue]);

   const inputClassMaxValue = `${s.input__number} ${errorMaxValue ? s.error : ''}`
   const inputClassStartValue = `${s.input__number} ${errorStartValue ? s.error : ''}`

   return (
      <div className={s.counter}>
         <div className={s.input}>
            <div className={s.input__top}>
               <p className={s.input__name}>Max value:</p>
               <input
                  onFocus={onActiveEditMode}
                  onChange={onChangeMaxValueHandler}
                  value={maxValue}
                  className={inputClassMaxValue}
                  type="number"
                  step={1}
               />
            </div>
            <div className={s.input__bottom}>
               <p className={s.input__name}>Start value:</p>
               <input
                  onFocus={onActiveEditMode}
                  onChange={onChangeStartValueHandler}
                  value={startValue}
                  className={inputClassStartValue}
                  type="number"
                  step={1}
               />
            </div>
         </div>
      </div>
   )
})
