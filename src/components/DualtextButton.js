
export const DualtextButton = ({ contractID, contractName }) => {
    return (
        <div className='dual-text-button'>
            <button className="contract-button">
                {contractID} - {contractName}
            </button>
        </div>
    );
};