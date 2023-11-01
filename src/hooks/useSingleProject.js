import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())
const useSingleProject = (id) => {
    const {
        data: project,
        error,
        isLoading,
        isValidating,
        mutate,
    } = useSWR(`/api/projects/${id}`, fetcher);
    return {
        project,
        error,
        isLoading,
        isValidating,
        mutate,
    };
};

export default useSingleProject;