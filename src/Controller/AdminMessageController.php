<?php
// src/Controller/AdminMessageController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Message;
use App\Repository\MessageRepository;

class AdminMessageController extends AbstractController
{
    public function viewMessages(MessageRepository $mr): Response
    {
        //  logique pour récupérer les messages depuis
        //  la base de données

        $messages = $mr->findAll();

        return $this->render('admin/messages.html.twig', [
            'messages' => $messages,
        ]);
    }
}
