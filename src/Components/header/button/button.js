import './button.scss'

const Button = ({className, ...restProps}) => {

  return (
    <button className={`button ${className}`} {...restProps} />
  )
}

export default Button