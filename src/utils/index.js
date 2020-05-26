export function getStatus(order) {
  if (order.canceled_at) {
    return { color: 'red', title: 'cancelada' };
  }

  if (!order.start_date && !order.end_date) {
    return { color: 'blue', title: 'retirada' };
  }

  if (order.start_date && !order.end_date) {
    return { color: 'yellow', title: 'pendente' };
  }

  return { color: 'green', title: 'entregue' };
}

