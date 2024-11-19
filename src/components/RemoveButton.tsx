interface RemoveButtonProps {
    onClick?: () => void;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ onClick }) => {
    return (
        <button className="remove-icon" {...(onClick && { onClick: onClick })}>
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    );
};

export default RemoveButton;
