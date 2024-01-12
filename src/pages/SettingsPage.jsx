import React from 'react';
import { Container, Typography } from '@mui/material';

const SettingsPage = () => {
  const algorithmDescription = `
    Задача о разрезании стрежня:

    Дан стрежень длиной n дюймов, а также таблица цен pi для каждой длины i (где 1 ≤ i ≤ n).
    Требуется определить оптимальный способ разрезать стрежень, чтобы максимизировать суммарную прибыль.

    Формулировка задачи:
    Пусть rn - максимальная прибыль, которую можно получить из стрежня длиной n.
    Тогда рекуррентное уравнение может быть записано следующим образом:

    rn = max(pi + rn-i)

    где максимизация производится по всем i, где 1 ≤ i ≤ n.

    Алгоритм оптимального разрезания стрежня:

    1. Создать массив r[0..n], где ri будет хранить максимальную прибыль для стрежня длиной i.
    2. Заполнить массив r значениями прибыли для стрежня длины 1, 2, ..., n с использованием рекуррентного уравнения.
    3. Вернуть rn как ответ.
  `;

  const containerStyle = {
    backgroundColor: '#f5f5f5',
    padding: '16px',
    borderRadius: '4px',
    boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
  };

  const titleStyle = {
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const textStyle = {
    color: '#333',
    fontFamily: 'Roboto, sans-serif',
    lineHeight: 1.5,
  };

  return (
    <Container style={containerStyle}>
      <Typography variant="h6" style={titleStyle}>
        Задача о разрезании стрежня:
      </Typography>
      <Typography variant="body1" paragraph style={textStyle}>
        {algorithmDescription}
      </Typography>
    </Container>
  );
};

export default SettingsPage;
