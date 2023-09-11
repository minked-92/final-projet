<?php

namespace App\Controller\Website;

use App\Entity\Message;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MessageController extends AbstractController
{
    /**
     * @Route("/message", name="message", methods={"POST"})
     */
    public function contact(Request $request,  EntityManagerInterface $manager): JsonResponse
    {
        $data = $request->request->all();
        
        // Créez une nouvelle instance de l'entité Message
        $messageEntity = new Message();
        $messageEntity->setNom($data['nom']);
        $messageEntity->setEmail($data['email']);
        $messageEntity->setText($data['message']);
        
        
        
        
        // Persistez l'entité dans la base de données
        $manager -> persist($messageEntity);
        // Exécutez la transaction pour enregistrer les données
        $manager->flush();
        
        return $this->json(true);
    }
}
