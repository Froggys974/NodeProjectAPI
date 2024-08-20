const Post = require('../models/postModel');

exports.listAllPosts = async (req,res) => {
    try {
        const posts = await Post.find({});
        res.status(200);
        res.json(posts);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'erreur server'});
    }
}

exports.createAPost = async (req, res) => {
    const newPost = new Post(req.body);

    try {
        const post = await newPost.save()
        res.status(201);
        res.json(post);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'erreur server'});
    }
}

exports.getAPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (!post) {
            return res.status(404).json({ message: 'Post non trouvé' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'Erreur serveur' });
    }
};

exports.updateAPost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.postId,
            req.body,
            { new: true, runValidators: true } 
        );
        if (!post) {
            return res.status(404).json({ message: 'Post non trouvé' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'Erreur serveur' });
    }
};

exports.deleteAPost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.postId);
        if (!post) {
            return res.status(404).json({ message: 'Post non trouvé' });
        }
        res.status(200).json({ message: 'Post supprimé avec succès' });
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: 'Erreur serveur' });
    }

};