export const Table = ({props: data}) => {
  return (
    <table className="w-full border-1">
      <thead className="border-1 bg-pink-500">
        <tr>
          <th className="border-1">Capital &#128181;</th>
          <th className="border-1">Interes &#128293;</th>
          <th className="border-1">Ganacia &#128200;</th>
          <th className="border-1">Total &#128176;</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item, key, index) => (
        <tr className="text-center">
          <td className="border-1">{item.capitalInicial}</td>
          <td className="border-1">{item.interes}</td>
          <td className="border-1">{item.ganancia}</td>
          <td className="border-1">{item.total}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}
