import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../lib/axios.ts";
import toast from "react-hot-toast";
import type Note from "../types/note.ts";
import NoteForm from "../components/NoteForm.tsx";

const NoteDetailsPage = () => {
  const [note, setNote] = useState<Note>();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await api.get(`/note/${id}`);
        setNote(response.data);
      } catch (error) {
        console.error(`Error in fetching note ${error}`);
        toast.error("Failed to fetch the note");
      }
    };

    fetchNote();
  }, [id]);

  return note && <NoteForm method="edit" idNote={id} note={note} />;
};

export default NoteDetailsPage;
