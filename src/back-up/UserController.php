<?php

namespace App\Controller\Website;

use Doctrine\ORM\EntityManager;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Doctrine\ORM\EntityManagerInterface;



use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;


use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AuthenticationException;






class UserController extends AbstractController
{
   /**
 * @Route("/register", name="app_user_create")
 */
public function createUser(EntityManagerInterface $entityManager)
{
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        // Créez une instance de l'entité User et définissez les propriétés
        $user = new User();
        $user->setName($name)
            ->setMail($email)
            ->setPassword($password);

        // Persistez l'entité dans la base de données
        $entityManager->persist($user);
        $entityManager->flush();    

        return $this->render('pages/homepage.html.twig');
        $_SESSION['messages']['success'][] = "Bienvenue " . $user['name'] . " !!!";
    }
     // Redirigez l'utilisateur vers une autre page après la création de l'utilisateur
     return $this->render('pages/connexion.html.twig'); // Remplacez "app_home" par la route de la page souhaitée

}




}
