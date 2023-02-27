export function Table() {
  return (
    <table class="table">
      <thead class="table__thead">
        <tr>
          <th class="table__th table__th--round-left">Description</th>
          <th>Hour</th>
          <th>Quantity</th>
          <th class="table__th--round-right">Price</th>
        </tr>
      </thead>
      <tbody class="table__tbody">
        <tr>
          <td class="table__td table__td--round-left">Design UX and UI</td>
          <td>14</td>
          <td>3</td>
          <td class="table__td--dark table__td--round-right">$943</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td table__td--round-left">Design UX and UI</td>
          <td>14</td>
          <td>3</td>
          <td class="table__td--dark table__td--round-right">$943</td>
        </tr>
        <tr>
          <td class="table__td table__td--round-left">Design UX and UI</td>
          <td>14</td>
          <td>3</td>
          <td class="table__td--dark table__td--round-right">$943</td>
        </tr>
        <tr class="table__tr">
          <td class="table__td table__td--round-left">Design UX and UI</td>
          <td>14</td>
          <td>3</td>
          <td class="table__td--dark table__td--round-right">$943</td>
        </tr>
      </tbody>
      <tfoot class="table__tfoot">
        <tr>
          <td colspan="3" class="table__td">
            Total
          </td>
          <td>$3750</td>
        </tr>
      </tfoot>
    </table>
  );
}
