export function Table(): JSX.Element {
  return (
    <table className="table">
      <thead className="table__thead">
        <tr>
          <th className="table__th table__th--round-left">Description</th>
          <th>Hour</th>
          <th>Quantity</th>
          <th className="table__th--round-right">Price</th>
        </tr>
      </thead>
      <tbody className="table__tbody">
        <tr>
          <td className="table__td table__td--round-left">Design UX and UI</td>
          <td>14</td>
          <td>3</td>
          <td className="table__td--dark table__td--round-right">$943</td>
        </tr>
        <tr className="table__tr">
          <td className="table__td table__td--round-left">Design UX and UI</td>
          <td>14</td>
          <td>3</td>
          <td className="table__td--dark table__td--round-right">$943</td>
        </tr>
        <tr>
          <td className="table__td table__td--round-left">Design UX and UI</td>
          <td>14</td>
          <td>3</td>
          <td className="table__td--dark table__td--round-right">$943</td>
        </tr>
        <tr className="table__tr">
          <td className="table__td table__td--round-left">Design UX and UI</td>
          <td>14</td>
          <td>3</td>
          <td className="table__td--dark table__td--round-right">$943</td>
        </tr>
      </tbody>
      <tfoot className="table__tfoot">
        <tr>
          <td colSpan={3} className="table__td">
            Total
          </td>
          <td>$3750</td>
        </tr>
      </tfoot>
    </table>
  );
}
