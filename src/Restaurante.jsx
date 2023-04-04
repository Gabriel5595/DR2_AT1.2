import React, { useState } from "react";

function Slider({ label, min, max, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input type="range" min={min} max={max} value={value} onChange={onChange} />
      <span>{value}%</span>
    </div>
  );
}

function Restaurante() {
  const [total, setTotal] = useState(0);
  const [percentualGorjeta, setPercentualGorjeta] = useState(10);
  const [quantidadePessoas, setQuantidadePessoas] = useState(1);

  function handleTotalChange(event) {
    setTotal(parseFloat(event.target.value));
  }

  function handlePercentualGorjetaChange(event) {
    setPercentualGorjeta(parseInt(event.target.value));
  }

  function handleQuantidadePessoasChange(event) {
    setQuantidadePessoas(parseInt(event.target.value));
  }

  const valorGorjeta = (total * percentualGorjeta) / 100;
  const valorTotal = total + valorGorjeta;
  const valorPorPessoa = valorTotal / quantidadePessoas;

  return (
    <div>
      <h2>Conta do Restaurante</h2>
      <div>
        <label>Total da Conta:</label>
        <input type="number" value={total} onChange={handleTotalChange} />
      </div>
      <Slider
        label="Percentual de Gorjeta:"
        min={0}
        max={20}
        value={percentualGorjeta}
        onChange={handlePercentualGorjetaChange}
      />
      <div>
        <label>Quantidade de Pessoas:</label>
        <input type="number" value={quantidadePessoas} onChange={handleQuantidadePessoasChange} />
      </div>
      <h3>Valor Total: R$ {valorTotal.toFixed(2)}</h3>
      <h3>Valor por Pessoa: R$ {valorPorPessoa.toFixed(2)}</h3>
    </div>
  );
}

export default Restaurante;
