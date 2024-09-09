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
