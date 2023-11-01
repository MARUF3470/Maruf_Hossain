import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())
const useProject = () => {
    const {
        data: projects = [],
        error,
        isLoading,
        isValidating,
        mutate,
    } = useSWR("/api/projects", fetcher);

    return {
        projects,
        error,
        isLoading,
        isValidating,
        mutate,
    };
};

export default useProject;