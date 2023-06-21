import JWTService from "@/services/jwt.service";
import { createResources } from "@/common/utils";

export default function (store) {
  store.$jwt = JWTService;
  store.$api = createResources();
}
