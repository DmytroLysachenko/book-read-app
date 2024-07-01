export const selectGoingToReadBooks = (state) => state.books.goingToRead;
export const selectCurrentlyReadingBooks = (state) =>
  state.books.currentlyReading;
export const selectFinishedReadingBooks = (state) =>
  state.books.finishedReading;
export const selectCurrentPlanning = (state) => state.books.planning;
export const selectIsLoading = (state) => state.books.loading;
export const selectIsError = (state) => state.books.error;
export const selectCurrentlyReviewing = (state) =>
  state.books.currentlyReviewing;
