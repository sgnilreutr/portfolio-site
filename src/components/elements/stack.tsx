import classNames from 'lib/classNames'

export type StackSpacing =
  | 'none'
  | 'px'
  | 'mini'
  | 'small'
  | 'default'
  | 'large'
  | 'huge'
  | 'enormous'
  | 'gigantic'
  | 'colossal'

type StackAlignment = 'start' | 'center' | 'end' | 'stretch' | 'between'

export type IStack = {
  direction?: 'vertical' | 'horizontal'
  justify?: StackAlignment
  spacing?: StackSpacing
  align?: StackAlignment
  wrap?: boolean
} & React.HTMLAttributes<HTMLDivElement>

const Stack = ({
  direction = 'horizontal',
  spacing = 'default',
  justify = 'stretch',
  align = 'stretch',
  children,
  wrap,
  ...rest
}: IStack) => {
  const spacingToGap: Record<StackSpacing, string> = {
    px: 'px',
    none: '0',
    mini: '1',
    small: '2',
    default: '3',
    large: '4',
    huge: '5',
    enormous: '6',
    gigantic: '7',
    colossal: '8',
  }

  const spacingAmount = spacingToGap[spacing]

  return (
    <div
      {...rest}
      className={classNames(
        `flex items-${align} justify-${justify} gap-${spacingAmount}`,
        direction === 'horizontal' ? 'flex-row' : 'flex-col',
        wrap && 'flex-wrap',
        rest.className
      )}
    >
      {children}
    </div>
  )
}

export default Stack
