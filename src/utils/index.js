import { format } from 'date-fns';
import pt_br from 'date-fns/locale/pt-BR';

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

export function formatOrders(orders) {
  return orders.map((order) => {
    if (order.start_date) {
      order.start_date = format(
        new Date(order.start_date),
        'dd/MM/yyyy',
        { locale: pt_br },
      );
    }

    if (order.end_date) {
      order.end_date = format(
        new Date(order.end_date),
        'dd/MM/yyyy',
        { locale: pt_br },
      );
    }

    order.status = getStatus(order);

    return order;
  });
}
