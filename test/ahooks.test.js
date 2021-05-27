import { renderHook, act } from '@testing-library/react-hooks/dom';
import { useBoolean } from 'ahooks';

const setUp = (defaultValue) => renderHook(() => useBoolean(defaultValue));

describe('useBoolean', () => {
  it('should be defined', () => {
    expect(useBoolean).to.exist;
  });

  it('test on methods', async () => {
    const { result } = setUp();
    expect(result.current[0]).to.be.false;
    act(() => {
      result.current[1].setTrue();
    });
    expect(result.current[0]).to.be.true;
  });

});
