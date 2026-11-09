export interface Invoice { id: string; customerName: string | null; totalCents: number }

// Pages are numbered from 0.
export function pageOf(items: Invoice[], page: number, size: number): Invoice[] {
  const start = page * size;
  return items.slice(start, start + size);
}

export function pageCount(total: number, size: number): number {
  return Math.ceil(total / size);
}

export function invoiceLabel(inv: Invoice): string {
  return `${inv.id} · ${inv.customerName ?? "unknown customer"}`;
}
