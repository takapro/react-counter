/* eslint-disable @typescript-eslint/no-explicit-any */

import * as ReactRedux from 'react-redux';

export const useSelector: <T>(selector: (state: any) => T, deps?: any[]) => T = (ReactRedux as any).useSelector;
export const useDispatch: () => (action: any) => void = (ReactRedux as any).useDispatch;
