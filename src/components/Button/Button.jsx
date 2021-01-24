import './Button.css'

/**
 * @param { object } prop
 * @param { boolean } [prop.ghost]
 * @param { boolean } [prop.primary]
 * @param { function () : void } [prop.onClick]
 */
export const Button = ({ children, ghost, primary, onClick }) => (
  <div
    className={`button ${ghost ? 'ghost' : ''} ${primary ? 'primary' : ''}`}
    onClick={onClick}
  >
    {children}
  </div>
)
