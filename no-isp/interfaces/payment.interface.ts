interface INoPayment {
    calculatePayment(): void;
    creditCardPayment(): void;
    bankTransferPayment(): void;
    cashPayment(): void;
}