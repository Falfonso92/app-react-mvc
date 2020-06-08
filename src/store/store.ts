import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { employeeStore } from './employee-store';
import { EmployeesService } from '../services/employees';

export const store = configureStore({
  reducer: {
    employeeReducer: employeeStore.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<any>
>;
