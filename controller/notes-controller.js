const Note = require('../model/notes-models')

async function handleGetAllNotes(req, res) {

    try {

        const { q, sort } = req.query

        let filter = {}
        if (q) {
            filter = {
                $or: [
                    { title: { $regex: q, $options: 'i' } },
                    { content: { $regex: q, $options: 'i' } }
                ]
            }
        }

        let sortOption = { createdAt: -1 } 
        if (sort) {
            const sortField = sort.startsWith('-') ? sort.slice(1) : sort
            const sortOrder = sort.startsWith('-') ? -1 : 1
            sortOption = { [sortField]: sortOrder }
        }

        const notes = await Note.find(filter).sort(sortOption)
        return res.status(200).json({ notes })

    }
    catch (err) {
        if (err.name === "CastError") {
            return res.status(400).json({ err: " Invalid ID format " })

        }
        return res.status(500).json({ err: " Internal server error " })
    }

}

async function handleCreateNotes(req, res) {

    try {

        const { title, content } = req.body

        if (title && title.trim() !== "" && content && content.trim() !== "") {

            const note = await Note.create({
                title: title,
                content: content,
            })

            return res.status(201).json({ success: "Note Created", note })
        }

        return res.status(400).json({ message: " title and content Required" })

    }
    catch (err) {
        if (err.name === "CastError") {
            return res.status(400).json({ err: " Invalid ID format " })

        }
        return res.status(500).json({ err: " Internal server error " })
    }

}

async function HandleGetById(req, res) {
    try {

        const id = req.params.id
        const note = await Note.findById(id)

        if (!note) {
            return res.status(404).json({ error: "Note not found" })
        }

        return res.status(200).json({ success: "Found your Note", note })

    }
    catch (err) {
        if (err.name === "CastError") {
            return res.status(400).json({ err: " Invalid ID format " })
        }
        return res.status(500).json({ err: " Internal server error " })
    }
}

// async function HandleUpdateById(req, res) {
//     try {

//         const id = req.params.id
//         const { title, content } = req.body

//         const note = await Note.findByIdAndUpdate(id, { title: title, content: content }, { new: true })

//         if (!note) {
//             return res.status(404).json({ error: "Note not found" })
//         }

//         return res.status(200).json({ success: "Updated your Note", note })


//     }
//     catch (err) {
//         if (err.name === "CastError") {
//             return res.status(400).json({ err: " Invalid ID format " })
//         }
//         return res.status(500).json({ err: " Internal server error " })
//     }
// }


async function HandleUpdateById(req, res) {
    try {
        const id = req.params.id
        const { title, content } = req.body

        // Build update object conditionally
        const updateData = {}

        if (title !== undefined) {
            if (title.trim() === "") {
                return res.status(400).json({ error: "Title cannot be empty" })
            }
            updateData.title = title
        }

        if (content !== undefined) {
            if (content.trim() === "") {
                return res.status(400).json({ error: "Content cannot be empty" })
            }
            updateData.content = content
        }

        // If nothing to update
        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({ error: "No valid fields to update" })
        }

        const note = await Note.findByIdAndUpdate(id, updateData, { new: true })

        if (!note) {
            return res.status(404).json({ error: "Note not found" })
        }

        return res.status(200).json({ success: "Updated your Note", note })
    }
    catch (err) {
        if (err.name === "CastError") {
            return res.status(400).json({ error: "Invalid ID format" })
        }
        return res.status(500).json({ error: "Internal server error" })
    }
}


async function HandleDeleteById(req, res) {
    try {

        const id = req.params.id

        const note = await Note.findByIdAndDelete(id)

        if (!note) {
            return res.status(404).json({ error: "Note not found" })
        }

        return res.status(200).json({ success: "Delete your Note" })

    }
    catch (err) {
        if (err.name === "CastError") {
            return res.status(400).json({ err: " Invalid ID format " })
        }
        return res.status(500).json({ err: " Internal server error " })
    }
}


module.exports = {
    handleGetAllNotes,
    handleCreateNotes,
    HandleGetById,
    HandleUpdateById,
    HandleDeleteById,
}