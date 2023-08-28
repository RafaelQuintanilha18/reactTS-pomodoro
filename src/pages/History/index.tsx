import { HistoryContainer, HistoryList } from './styled'

export function History() {
  return (
    <HistoryContainer>
      <h1>My Task History</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task Start</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Task Start</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Task Start</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Task Start</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Task Start</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
