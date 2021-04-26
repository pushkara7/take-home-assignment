import React, { useState } from "react";

export const useSortData = (list) => {
    const initialColumnState = { key: "", direction: 0 };
    const [columnToSort, setColumnToSort] = useState(initialColumnState);

    const { key, direction } = columnToSort;

    const findSortDirection = (keyProp) => {
        let sortOrder = 1;
        if (key === keyProp && direction === 1) {
            sortOrder = -1;
        }
        setColumnToSort({ key: keyProp, direction: sortOrder });
    };

    const sortedList = React.useMemo(() => {
        const sortedList = [...list];
        if (key) {
            sortedList.sort((a, b) => {
                if (a.properties[key] > b.properties[key]) {
                    return direction === 1 ? 1 : -1;
                }
                if (a.properties[key] < b.properties[key]) {
                    return direction === 1 ? -1 : 1;
                }
                return 0;
            });
        }
        return sortedList;
    }, [list, columnToSort]);

    return { sortedList, findSortDirection };
};
