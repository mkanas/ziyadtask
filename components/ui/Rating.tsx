interface RatingProps {
  value: number
  max?: number
}

const Rating = ({ value, max = 5 }: RatingProps) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(max)].map((_, i) => {
        const filled = i + 1 <= Math.round(value)
        return (
          <span
            key={i}
            className={
              filled ? 'text-yellow-400 font-extrabold' : 'text-gray-300'
            }
          >
            ★
          </span>
        )
      })}
      <span className="ml-1 text-sm text-gray-500">({value.toFixed(1)})</span>
    </div>
  )
}

export default Rating
