export const optimisticReducer = (currentState: string[], city: string) => {
  if (!currentState) return [city];

  if (currentState.includes(city)) {
    return currentState.filter((name) => name !== city);
  } else {
    return [...currentState, city];
  }
};
