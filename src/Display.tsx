import React from 'react';

export type DisplayType = {
    count: number
}
const Display = (props: DisplayType) => {
    return (
        <div>
            {props.count}
        </div>
    );
};

export default Display;