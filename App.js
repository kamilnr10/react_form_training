const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2);
  return (
    <div>
      {props.title} {props.cash <= 0 ? "" : value}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    // ratioDollar: 3.6,
    // ratioEuro: 4.2,
  };

  currencies = [
    {
      id: 1,
      name: "dollar",
      ratio: 3.6,
      title: "Wartość w dolarach: ",
    },
    {
      id: 2,
      name: "euro",
      ratio: 4.1,
      title: "Wartość w euro: ",
    },
    {
      id: 3,
      name: "pound",
      ratio: 4.55,
      title: "Wartość w funtach: ",
    },
  ];

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  render() {
    const { amount } = this.state;
    const calculators = this.currencies.map((currency) => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
      />
    ));

    return (
      <div className="app">
        <label>
          Wybierz produkt
          <select>
            <option value="electricity">prąd</option>
            <option value="gas">gaz</option>
            <option value="water">woda</option>
          </select>
        </label>
        <br />
        <label>
          <input type="number" value={amount} onChange={this.handleChange} />
        </label>
        {calculators}
      </div>
    );
  }
}
