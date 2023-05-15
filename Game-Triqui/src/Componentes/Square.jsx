export const Square = ({children, isSelected, updateBoard, index}) =>{
    const className = `square ${isSelected ? 'is-selected': ''}`
    
  //Esta es llamada cuando se le da click al div, y llama la funcion "updateBoard()"
  const handleClick = () => {
    updateBoard(index)
  }
    return(
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }