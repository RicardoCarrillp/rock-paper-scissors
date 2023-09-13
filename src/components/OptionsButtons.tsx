// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function OptionsButtons({ option, disabled, handlePlay }: any) {

    return (
        <>
            <button key={option.id} className="options-buttons"
                disabled={disabled}
                onClick={() => handlePlay(option.id)}
                title={option.name}>
                {option.emoji}
            </button>
        </>

    )
}
