import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../queries/queryKeys.js';

const API_URL = 'http://localhost:4000/testResults';

export const getTestResults = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const postTestResult = async (resultData) => {
  try {
    const response = await axios.post(API_URL, resultData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const useGetTestResults = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: queryKeys.boardController.testResults(),
    queryFn: getTestResults,
  });

  return { data, isPending, isError };
};

export const usePostTestResults = () => {
  const queryClient = useQueryClient();
  const {
    mutate: mutateTestResult,
    isSuccess,
    data: postedData,
    isPending,
  } = useMutation({
    mutationFn: postTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.boardController.testResults());
    },
  });

  return { mutateTestResult, isSuccess, postedData, isPending };
};

const patchIsPublic = async (targetResult) => {
  const patchedData = { ...targetResult, isPublic: !targetResult.isPublic };
  await axios.patch(`${API_URL}/${targetResult.id}`, patchedData);
};

export const useToggleIsPublic = () => {
  const queryClient = useQueryClient();
  const { mutate: mutateIsPublic } = useMutation({
    mutationFn: patchIsPublic,
    onMutate: async (targetResult) => {
      const resultKey = queryKeys.boardController.testResults();
      await queryClient.cancelQueries({ queryKey: resultKey });
      const previousResults = queryClient.getQueryData(resultKey);

      queryClient.setQueryData(resultKey, (old) => {
        return old.map((oldResult) => {
          if (oldResult.id === targetResult.id) return { ...targetResult, isPublic: !targetResult.isPublic };
          else return oldResult;
        });
      });

      return { previousResults };
    },
    onError: (error, targetResult, context) => {
      queryClient.setQueryData(queryKeys.boardController.testResults(), context.previousResults);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.boardController.testResults() });
    },
  });

  return { mutateIsPublic };
};
