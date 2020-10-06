const Cash = (props) => {
  const value = ((props.cash / props.ratio) * props.price).toFixed(2);
  return (
    <div>
      {props.title} {props.cash <= 0 ? "" : value}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "gas",
    // ratioDollar: 3.6,
    // ratioEuro: 4.2,
  };

  static defaultProps = {
    currencies: [
      {
        id: 0,
        name: "zloty",
        ratio: 1,
        title: "Wartość w złotówkach: ",
      },
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
    ],
    prices: {
      electricity: 0.51,
      gas: 4.76,
      water: 3.75,
    },
  };

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleSelect = (e) => {
    this.setState({
      product: e.target.value,
      amount: "",
    });
  };

  selectPrice = (select) => {
    const price = this.props.prices[select];
    console.log(this.props.prices[select]);
    return price;
  };

  insertSuffix = (select) => {
    if (select === "electricity") return <em> kWh</em>;
    if (select === "gas") return <em> m3</em>;
    if (select === "water") return <em> l</em>;
    else return null;
  };

  render() {
    const { amount, product } = this.state;
    const calculators = this.props.currencies.map((currency) => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
        price={this.selectPrice(product)}
      />
    ));

    return (
      <div className="app">
        <label>
          Wybierz produkt
          <select value={product} onChange={this.handleSelect}>
            <option value="electricity">prąd</option>
            <option value="gas">gaz</option>
            <option value="water">woda</option>
          </select>
        </label>
        <br />
        <label>
          <input type="number" value={amount} onChange={this.handleChange} />
          {this.insertSuffix(this.state.product)}
        </label>
        {calculators}
      </div>
    );
  }
}
