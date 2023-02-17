import css from './header.module.scss'


export const Header = ({children}) => {
    return (
        <header className={css.header}>
            {children}                                                                                                  
        </header>
    )     
  }
  
  