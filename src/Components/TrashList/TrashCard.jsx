import { useNotes } from "../../Context";

export function TrashCard({ currentNote }) {
    const { title, note, createdAt } = currentNote;
    const { restoreFromTrash, deleteNoteFromTrash } = useNotes();
    return (
        <div className="note pointer pa-12">
            <div className="content-wrapper">
                <div>
                    <div className="note-title mb-6">{title}</div>
                    <div className="note-text mb-6">{note}</div>
                </div>
            </div>
            <div className="flex-row-spc-btw mt-16">
                <div>{createdAt}</div>
                <div className="note-actions flex-row-spc-btw">
                    <button className="pointer">
                        <span className="material-icons-outlined" onClick={(e) => restoreFromTrash(e, currentNote)}>
                            restore
                        </span>
                    </button>
                    <button className="pointer">
                        <span className="material-icons-outlined" onClick={(e) => deleteNoteFromTrash(e, currentNote)}>
                            delete_forever
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}